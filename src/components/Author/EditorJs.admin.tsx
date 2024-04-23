import { cn } from "@/lib/utils";
import EditorJS, { ToolConstructable } from "@editorjs/editorjs";
import { useCallback, useEffect, useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  name: string;
  label?: string;
  placeholder?: string;
  get: (val: string) => void;
  className?: string;
  defaultValue?: any;
  current?: string;
}

export function Editor({
  name,
  placeholder,
  get,
  className,
  defaultValue,
}: IProps) {
  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const [data, setData] = useState<any>();

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed"))
      .default as ToolConstructable;
    const Table = (await import("@editorjs/table"))
      .default as ToolConstructable;
    const List = (await import("@editorjs/list")).default as ToolConstructable;
    const Code = (await import("@editorjs/code")).default as ToolConstructable;
    const LinkTool = (await import("@editorjs/link"))
      .default as ToolConstructable;
    const InlineCode = (await import("@editorjs/inline-code"))
      .default as ToolConstructable;
    const RawTool = (await import("@editorjs/raw"))
      .default as ToolConstructable;
    const Image = (await import("@editorjs/image"))
      .default as ToolConstructable;

    // const server_token = await (await fetch("/api/protected")).json();

    if (!ref.current) {
      const editor = new EditorJS({
        holder: name || "editor",
        onReady() {
          ref.current = editor;
        },
        // placeholder: placeholder || "Type here to write your post...",
        inlineToolbar: true,
        data:
          typeof defaultValue === "string"
            ? JSON.parse(defaultValue || "{}")
            : "",
        tools: {
          ...{ header: Header },
          ...{ linkTool: LinkTool },
          ...{ list: List },
          ...{ code: Code },
          ...{ inlineCode: InlineCode },
          ...{ table: Table },
          ...{ embed: Embed },
          ...{ raw: RawTool },
          ...{
            image: {
              class: Image,
              config: {
                // endpoints: {
                //   byFile: `http://localhost:8000/api/v1/image-uploader/upload-file`,
                // },
                // additionalRequestHeaders: {
                //   Authorization: `Bearer ${server_token?.user.data.data.token.token}`,
                // },
                // uploader: {
                //   async uploadByFile(file: File) {
                //     const formData = new FormData();
                //     formData.append("image", file);
                //     const res = await (
                //       await fetch(PATH.POST_ADD_EDITORJS_IMAGE, {
                //         method: "POST",
                //         headers: {
                //           Authorization: `Bearer ${server_token?.user.data.data.token.token}`,
                //         },
                //         body: formData,
                //       })
                //     ).json();
                //     return res;
                //   },
                // },
              },
            },
          },
        },
        onChange: async () => {
          const data = await ref.current?.save();
          setData(data);
        },
      });
    }
  }, [placeholder, defaultValue, name]);

  useEffect(() => {
    if (data) {
      get(data);
    }
  }, [data]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="flex  flex-col">
        <div id={name || "editor"} className={cn(" break-words", className)} />
        {/* <p className="text-sm text-gray-500">
          Use{" "}
          <kbd className="bg-muted rounded-md border px-1 text-xs uppercase">
            Tab
          </kbd>{" "}
          to open the command menu.
        </p> */}
      </div>
    </div>
  );
}
