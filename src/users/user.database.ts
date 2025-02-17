import { User, UnitUser, Users } from "./user.interface";
import bcrypt from "bcryptjs"
import {v4 as random} from "uuid"
import fs from "fs"

let users loadUsers = loadUsers()

function loadUsers () : Users {
    try {
        const data = fs.readFileSync(".users.json", "utf-8")
        return JSON.parse(data)
    } catch (error) {
        console.log(`Error $(error)`)
        return {}
    }
}

function saveUsers () {
   try {
    fs.writeFileSync(".users.json", JSON.stringify(users), "utf-8")
    console.log(`User saved successfully!`)
   } catch (error) {
    console.log(`Error : ${error}`)
   }
}

export const findAll = async (): Promise<UnitUser[]> =>Object.values(users);

export const findOne = async (id: string): Promise<UnitUser> => users[id];

export const create = async {userData: UnitUser}: Promise<UnitUSer | null> => {

    let id = random()

    let check_user = await findOne(id);

    while (check_user) {
        id = random()
        check_user = await findOne(id)
    }
}