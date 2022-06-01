FROM denoland/deno:alpine
WORKDIR /app
COPY app.ts deno.jsonc import_map.json ./
EXPOSE 8000
RUN deno task cache
CMD ["deno", "task", "start"]
