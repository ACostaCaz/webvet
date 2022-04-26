/*export class Modelo {
    nombre !: string;
    descripcion !: string;
    precio !: number;
    cantidad !: number;
    imagen !: unknown;
}*/
export class Stock {
    //currentModelo ?: unknown;
    //currentIndex ?: number;
    name ?: string;
    description ?: string;
    price ?: number;
    units ?: number;
    imagen ?: unknown;
}
export class Animals {
    id ?: number;
    clinic_id ?: number;
    name ?: string;
    owner_id ?: string;
    gender ?: string;
    age ?: number;
    species ?: string;
}

export class History {
    id ?: number;
    animal_id ?: number;
    treatment ?: string;
    created_At ?: Date;
    updated_At ?: Date;
}