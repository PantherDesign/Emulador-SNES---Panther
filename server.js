import express from "express"
import fs from "fs"
import path from "path"
import cors from "cors"

const app = express()

app.use(cors())

const romPath = path.join(process.cwd(), "public/roms")

app.get("/api/roms", (req, res) => {

  fs.readdir(romPath, (err, files) => {

    if (err) {
      return res.status(500).json({ error: "Erro lendo ROMs" })
    }

    const roms = files.filter(file =>
      file.endsWith(".sfc") ||
      file.endsWith(".smc") ||
      file.endsWith(".nes") ||
      file.endsWith(".gba")
    )

    res.json(roms)

  })

})

app.listen(3001, () => {
  console.log("Servidor de ROMs rodando em http://localhost:3001")
})