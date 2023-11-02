const validate = (data, setErr) => {
    const updatedErr = { ...data }; // Copia el objeto de errores existente

    if (!data.name) {
        updatedErr.name = "Name is required";
    } else {
        updatedErr.name = "";
    }


    if (!data.img) {
        updatedErr.img = "Image link is required";
    } else {
        updatedErr.img = "";
    }


    if (isNaN(data.hp) || data.hp < 0 || data.hp > 1000) {
        updatedErr.hp = "HP must be a number between 0 and 1000";
    } else {
        if (!data.hp) {
            updatedErr.hp = "HP is required";
        } else {
            updatedErr.hp = "";
        }
    }


    if (isNaN(data.attack) || data.attack < 0 || data.attack > 1000) {
        updatedErr.attack = "Attack must be a number between 0 and 1000";
    } else {
        if (!data.attack) {
            updatedErr.attack = "attack is required";
        } else {
            updatedErr.attack = "";
        }
    }


    if (isNaN(data.defense) || data.defense < 0 || data.defense > 1000) {
        updatedErr.defense = "Defense must be a number between 0 and 1000";
    } else {
        if (!data.defense) {
            updatedErr.defense = "defense is required";
        } else {
            updatedErr.defense = "";
        }
    }


    if (isNaN(data.speed) || data.speed < 0 || data.speed > 1000) {
        updatedErr.speed = "Speed must be a number between 0 and 1000";
    } else {
        if (!data.speed) {
            updatedErr.speed = "opcional";
        } else {
            updatedErr.speed = "";
        }
    }
    

    if (isNaN(data.height) || data.height < 0 || data.height > 100) {
        updatedErr.height = "Height must be a number between 0 and 100";
    } else {
        if (!data.height) {
            updatedErr.height = "opcional";
        } else {
            updatedErr.height = "";
        }
    }
    

    if (isNaN(data.weight) || data.weight < 0 || data.weight > 10000) {
        updatedErr.weight = "Weight must be a number between 0 and 10000";
    } else {
        if (!data.weight) {
            updatedErr.weight = "opcional";
        } else {
            updatedErr.weight = "";
        }
    }
    
    
     if (!data.frist || !data.second) {
            updatedErr.types = "You must add at least 2 types";
        } else { if (!data.frist == '' && !data.second=='' && data.frist === data.second  ) {
            updatedErr.types = "you can't have repeated types";
        } else {
            updatedErr.types = "";
        }
        }

        

    // Actualiza el objeto de errores con los mensajes actualizados
    setErr(updatedErr);
};

export default validate;
