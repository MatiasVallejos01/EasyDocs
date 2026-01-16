import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync('easydocs.db');

export const setupDatabase = async () => {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            url TEXT NOT NULL UNIQUE,
            size INTEGER,
            is_favorite BOOLEAN DEFAULT 0
        );
    `);
};

export const addDocument = async (name: string, url: string, size: number) => {
    try{
        const result = await db.runAsync(`
            INSERT INTO documents (name,url,size) VALUES (?,?,?)`,[name, url, size]
        );
        return result.lastInsertRowId;
    }catch(e){
        console.error("Error al agregar documento:", e);
    }
};

export const getDocuments = async () => {
    try{
        const results = await db.getAllAsync(`SELECT * FROM documents;`);
        return results;
    }catch(e){
        console.error("Error al obtener documentos:", e);
        return [];
    }
};