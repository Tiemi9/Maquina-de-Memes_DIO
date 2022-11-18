async function mapImageList() {
    const memesObject = [
        {
            "name": "Gato Contocionista",
            "path": "img/gato-contorcionista.jpg"
        },
        {
            "name": "Gato Risonho",
            "path": "img/gato-sorrindo.jpg"
        },
        {
            "name": "Gato Assustado",
            "path": "img/gato-assustado.jpg"
        },
        {
            "name": "Gato Constrangido",
            "path": "img/gato-constrangido.jpg"
        },
        {
            "name": "Gato Arteiro",
            "path": "img/gato-fiz-arte.jpg"
        },
        {
            "name": "Gato Intimidador",
            "path": "img/gato-intimidador.jpg"
        },
        {
            "name": "Gato Linguarudo",
            "path": "img/gato-linguarudo.jpg"
        },
        {
            "name": "Gato Pensativo",
            "path": "img/gato-pensativo.jpg"
        },
        {
            "name": "Gato Safado",
            "path": "img/gato-safado.jpg"
        },
        {
            "name": "Gato Sorrindo",
            "path": "img/gato-sorrindo.jpg"
        },
        {
            "name": "Gato Tímido",
            "path": "img/gato-timido.jpg"
        }
    ]
    return memesObject
}

async function creatGallery(imageList) {
    const memeSelector = document.querySelector('#memes-list')
    imageList.forEach(picture => {
        let newOption = document.createElement('Option')
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeMemePicture(photo) {
    let displayImage = document.querySelector('#display-image')
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main() {
    const memesImageList = await mapImageList()
    await creatGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)
}

main();

