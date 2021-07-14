import type { RenderOptions } from '@/server/renderer';

// tools/webpack/webpack.common.js - webpack.definePlugin
declare global {
  const __DEV__: boolean;
  const __PROD__: boolean;

  const __CLIENT__: boolean;

  interface Window {
    STATIC_DATA: any;
  }
}

// src/server/renderer.tsx - fastifyRenderPlugin
declare module 'fastify' {
  interface FastifyReply {
    render: (payload: RenderOptions) => void;
  }
  interface FastifyInstance {
    render: (payload: RenderOptions) => string;
  }
}
