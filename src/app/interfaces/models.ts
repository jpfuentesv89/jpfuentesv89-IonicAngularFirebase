export interface Usuario {
    rut:       number;
    dv:        string;
    nombre:    string;
    apaterno:  string;
    amaterno:  string;
    direccion: string;
    comuna:    string;
    email:     string;
    telefono:  number;
    username:  string;
    uid:       string;
    foto:      string;
    tipo:      string;
}

export interface Productos {
    id:             string;
    nombre:         string;
    precio:         number;
    descripcion:    string;
    tipo:           string;
    foto:           string;
    stock:          number;
    medida:         string;
    cantidad:       number;
}

export interface credentialsBiometric {
    email:    string;
    password: string;
    check:    boolean;
}

export interface Venta {
    Date:         Date;
    Total:        number;
    cantidad:     number;
    uidComprador: string;
}

export interface DetalleCompra {
    id:             string;
    nombre:         string;
    precio:         number;
    descripcion:    string;
    tipo:           string;
    foto:           string;
    stock:          number;
    medida:         string;
    cantidad:       number;
    uidVenta:       string;
}

export interface Razas {
    id:             string;
    nombre:         string;
    especie:        string;
}
