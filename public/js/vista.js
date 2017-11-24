var vista = {
    body: document.querySelector("body"),
    usuario: null,
    localUse: false,

    setUsuario: function setUsuario(ref) {
        this.usuario = ref;
        localStorage.setItem("localUser", JSON.stringify(this.usuario));
    },


    getMensaje : function getMensaje(){
        var div = document.createElement("div");
        div.innerHTML=`
                        <h1>Hola</h1>
                        `;
        return div;
    },
    
    guardarEnLocal: function guardarEnLocal(parametroParaGuardar) {
        if (this.localUse == false) {
            localStorage.setItem("nombreDelItem", JSON.stringify(localUser));
            this.localUse = true;
        }
    },
    
    asignaLocal: function asignaLocal() {
        this.usuario = JSON.parse(localStorage.getItem("nombreDelItem"));
    },

    render: function render() {
    this.body.innerHTML = "";
        if (JSON.parse(localStorage.getItem("localUser")) == null) {
             this.body.appendChild(this.getMensaje());
        } else {
            this.asignaLocal();       
        }
    }
};


