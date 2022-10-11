export interface Clientes {
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
}

export interface Productos {
    id:             string;
    nombre:         string;
    precio:         number;
    descripcion:    string;
    foto:           string;
}