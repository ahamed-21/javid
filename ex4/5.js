var user = {
    first_name: "Javid",
    last_name: "Ahamed",
    age: "19",
    department: "AI-DS"
    };
    console.log(user);
    console.log(Object.keys(user).length);
    delete user.last_name;
    console.log(user);
    console.log(Object.keys(user).length);