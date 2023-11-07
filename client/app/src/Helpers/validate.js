const validate = (data, setErr) => {
    const updatedErr = { ...data };
    console.log(data);

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
    } else if (!data.hp) {
        updatedErr.hp = "HP is required";
    } else {
        updatedErr.hp = "";
    }

    if (isNaN(data.attack) || data.attack < 0 || data.attack > 1000) {
        updatedErr.attack = "Attack must be a number between 0 and 1000";
    } else if (!data.attack) {
        updatedErr.attack = "Attack is required";
    } else {
        updatedErr.attack = "";
    }

    if (isNaN(data.defense) || data.defense < 0 || data.defense > 1000) {
        updatedErr.defense = "Defense must be a number between 0 and 1000";
    } else if (!data.defense) {
        updatedErr.defense = "Defense is required";
    } else {
        updatedErr.defense = "";
    }

    if (isNaN(data.speed) || (data.speed < 0 || data.speed > 1000) && data.speed !== '') {
        updatedErr.speed = "Speed must be a number between 0 and 1000";
    } else {
        updatedErr.speed = "";
    }

    if (isNaN(data.height) || (data.height < 0 || data.height > 100) && data.height !== '') {
        updatedErr.height = "Height must be a number between 0 and 100";
    } else {
        updatedErr.height = "";
    }

    if (isNaN(data.weight) || (data.weight < 0 || data.weight > 10000) && data.weight !== '') {
        updatedErr.weight = "Weight must be a number between 0 and 10000";
    } else {
        updatedErr.weight = "";
    }

    if (data.types.length < 2) {
        updatedErr.types = "You must add at least 2 types";
    } else {
        updatedErr.types = '';
    }

    const ready = Object.values(updatedErr).filter((value) => value === "").length;

    if (ready === 9) {
        updatedErr.ready = true;
    } else {
        updatedErr.ready = ready;
    }

    console.log(updatedErr.ready);

    // Actualiza el objeto de errores con los mensajes actualizados
    setErr(updatedErr);
};

export default validate;
