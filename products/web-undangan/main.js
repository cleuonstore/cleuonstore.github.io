const fs = require('fs');
const path = require('path');

// Lokasi folder utama
const baseFolder = './';

function generateJSON() {
    const batchFolders = fs.readdirSync(baseFolder, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    batchFolders.forEach(batch => {
        const screensPath = path.join(baseFolder, batch, '_screens');
        if (!fs.existsSync(screensPath)) {
            console.warn(`⚠️  Lewati ${batch}, tidak ada folder _screens`);
            return;
        }

        const imageFiles = fs.readdirSync(screensPath)
            .filter(file => /\.(png|jpg|jpeg)$/i.test(file));

        const jsonData = imageFiles.map(filename => ({
            nama: path.parse(filename).name,
            kategori: "",
            gambar: `_screens/${filename}`
        }));

        const outputPath = path.join(baseFolder, `${batch}.json`);
        fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
        console.log(`✅ Berhasil membuat: ${outputPath}`);
    });
}

generateJSON();
