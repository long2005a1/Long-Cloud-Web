import { Component, lazy } from "solid-js"
import { getIframePreviews, me, getSettingBool } from "~/store"
import { Obj, ObjType, UserMethods, UserPermissions } from "~/types"
import { ext } from "~/utils"
import { generateIframePreview } from "./iframe"
import { useRouter } from "~/hooks"
import { getArchiveExtensions } from "~/store/archive"

type Ext = string[] | "*" | (() => string[])
type Prior = boolean | (() => boolean)

const extsContains = (exts: Ext | undefined, ext: string): boolean => {
  if (exts === undefined) {
    return false
  } else if (exts === "*") {
    return true
  } else if (typeof exts === "function") {
    return (exts as () => string[])().includes(ext)
  } else {
    return (exts as string[]).includes(ext)
  }
}

const isPrior = (p: Prior): boolean => {
  if (typeof p === "boolean") {
    return p
  }
  return p()
}

export interface Preview {
  name: string
  type?: ObjType
  exts?: Ext
  provider?: RegExp
  component: Component
  prior: Prior
}

export type PreviewComponent = Pick<Preview, "name" | "component">

const previews: Preview[] = [
  {
    name: "HTML网页",
    exts: ["html"],
    component: lazy(() => import("./html")),
    prior: true,
  },
  {
    name: "在线阿里网盘视频",
    type: ObjType.VIDEO,
    provider: /^Aliyundrive(Open)?$/,
    component: lazy(() => import("./aliyun_video")),
    prior: true,
  },
  {
    name: "Markdown文档",
    type: ObjType.TEXT,
    component: lazy(() => import("./markdown")),
    prior: true,
  },
  {
    name: "Markdown自动换行",
    type: ObjType.TEXT,
    component: lazy(() => import("./markdown_with_word_wrap")),
    prior: true,
  },
  {
    name: "URL网址",
    exts: ["url"],
    component: lazy(() => import("./url")),
    prior: true,
  },
  {
    name: "TXT文档",
    type: ObjType.TEXT,
    exts: ["url"],
    component: lazy(() => import("./text-editor")),
    prior: true,
  },
  {
    name: "在线查看图片",
    type: ObjType.IMAGE,
    component: lazy(() => import("./image")),
    prior: true,
  },
  {
    name: "在线播放视频",
    type: ObjType.VIDEO,
    component: lazy(() => import("./video")),
    prior: true,
  },
  {
    name: "在线播放音频",
    type: ObjType.AUDIO,
    component: lazy(() => import("./audio")),
    prior: true,
  },
  {
    name: "IPA安装及下载",
    exts: ["ipa", "tipa"],
    component: lazy(() => import("./ipa")),
    prior: true,
  },
  {
    name: "PLIST",
    exts: ["plist"],
    component: lazy(() => import("./plist")),
    prior: true,
  },
  {
    name: "办公文档",
    exts: ["doc", "docx", "ppt", "pptx", "xls", "xlsx", "pdf"],
    provider: /^Aliyundrive(Share)?$/,
    component: lazy(() => import("./aliyun_office")),
    prior: true,
  },
  {
    name: "录屏",
    exts: ["cast"],
    component: lazy(() => import("./asciinema")),
    prior: true,
  },
  {
    name: "压缩文档",
    exts: () => {
      const index = UserPermissions.findIndex(
        (item) => item === "read_archives",
      )
      if (!UserMethods.can(me(), index)) return []
      return getArchiveExtensions()
    },
    component: lazy(() => import("./archive")),
    prior: () => getSettingBool("preview_archives_by_default"),
  },
]

export const getPreviews = (
  file: Obj & { provider: string },
): PreviewComponent[] => {
  const { searchParams } = useRouter()
  const typeOverride =
    ObjType[searchParams["type"]?.toUpperCase() as keyof typeof ObjType]
  const res: PreviewComponent[] = []
  const subsequent: PreviewComponent[] = []
  // internal previews
  previews.forEach((preview) => {
    if (preview.provider && !preview.provider.test(file.provider)) {
      return
    }
    if (
      preview.type === file.type ||
      (typeOverride && preview.type === typeOverride) ||
      extsContains(preview.exts, ext(file.name).toLowerCase())
    ) {
      const r = { name: preview.name, component: preview.component }
      if (isPrior(preview.prior)) {
        res.push(r)
      } else {
        subsequent.push(r)
      }
    }
  })
  // iframe previews
  const iframePreviews = getIframePreviews(file.name)
  iframePreviews.forEach((preview) => {
    res.push({
      name: preview.key,
      component: generateIframePreview(preview.value),
    })
  })
  // download page
  res.push({
    name: "下载保存",
    component: lazy(() => import("./download")),
  })
  return res.concat(subsequent)
}
