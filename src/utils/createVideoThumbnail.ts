export function createVideoThumbnail(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      const URL = window.URL || window.webkitURL;

      video.src = URL.createObjectURL(file);

      video.addEventListener("loadedmetadata", () => {
        video.currentTime = 1;
      });

      video.addEventListener("seeked", () => {
        const aspectRatio = video.videoWidth / video.videoHeight;
        canvas.width = 200;
        canvas.height = canvas.width / aspectRatio;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Failed to create 2D context"));
          return;
        }

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        if (ctx.globalAlpha) {
          ctx.globalAlpha = 1;
        }

        const dataUri = canvas.toDataURL("image/png");
        URL.revokeObjectURL(video.src);
        resolve(dataUri);
      });

      video.addEventListener("error", () => {
        reject(new Error("Failed to load video"));
      });
    });
  }