const start = () => {
    let count = 0
    while(true){
        let option = "sair"
        switch(option) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()