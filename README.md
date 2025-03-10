# Tự học Typescript

## Cài đặt

- npm install -g typescript@5.8.2 ts-node@10.9.2
- npm install -g @types/node@22.13.10
- tsc --init
- tạo package.json: npm init -y
- tạo tsconfig.json: npx tsc --init
  {
  "compilerOptions": {
  "module": "CommonJS",
  "moduleResolution": "node",
  "esModuleInterop": true
  }
  }

### Lộ trình học

- **lab1**
  - Dịch file lab1.ts: tsc ./labs/lab1/lab1.ts
  - Xuất hiện file lab1.jx
  - Chạy: node ./labs/lab1/lab1.js
- **lab2**
  - Chạy file ts: ts-node labs/lab2/lab2.ts
  - Chạy file js: node labs/lab2/lab2.js
