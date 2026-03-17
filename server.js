import express from "express"
import fs from "fs"
import path from "path"
import cors from "cors"

const app = express()

app.use(cors())

const romPath = path.join(process.cwd(), "public", "roms")

// SERVIR ROMS
app.use("/roms", express.static(romPath))

// SERVIR SITE REACT
app.use(express.static("dist"))

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

// React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})