function controlador(vista) {

    vista.onRegistro = (parametro) => {

        var params = new FormData();
        params.set("nombreParametro", parametro);


        fetch(`${location.origin}/registro`, {
                method: "POST",
                body: params
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);

            });
    
    };


    vista.render();

}

controlador(vista);
