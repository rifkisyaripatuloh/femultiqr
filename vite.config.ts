import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
  plugins:[react()], resolve:{alias:{'@':path.resolve(__dirname,'./src')}},
  server:{host:'localhost',port:5173,proxy:{'/api':{target:'http://localhost:8000',changeOrigin:true},'/sanctum':{target:'http://localhost:8000',changeOrigin:true},'/go':{target:'http://localhost:8000',changeOrigin:true},'/r':{target:'http://localhost:8000',changeOrigin:true}}}
})
