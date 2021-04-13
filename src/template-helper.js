//build team
const createTeam = team => {

    // html for manager card
    const createManager = manager => {
        return `
        <div class="card team-card">
                    <div class="card-header">
                        <h3 class="card-title">${manager.getName()}</h2>
                        <h4 class="card-subtitle text-muted">${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
                        </ul>
                    </div>
                </div>
        `;
    }


    //html for engineer card
    const createEngineer = engineer => {
        return `
        <div class="card team-card">
                    <div class="card-header">
                        <h3 class="card-title">${engineer.getName()}</h2>
                        <h4 class="card-subtitle text-muted">${engineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" >${engineer.getGitHub()}</a></li>
                        </ul>
                    </div>
                </div>
        `;
    }

    //html for intern card
    const createIntern = intern => {
        return `
        <div class="card team-card">
        <div class="card-header">
            <h3 class="card-title">${intern.getName()}</h2>
            <h4 class="card-subtitle text-muted">${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
    }

    const pageContent = [];

    //filters teamArray for all employees with Manager role and generates html for employee card using generateManager function
    pageContent.push(team.filter(employee => employee.getRole() === "Manager")
    .map(manager => createManager(manager))
    );

    //filters teamArray for all employees with Engineer role and generates html for employee card using generateEngineer function
    pageContent.push(team.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => createEngineer(engineer))
    .join("")
    );

    //filters teamArray for all employees with Intern role and generates html for employee card using generateIntern function
    pageContent.push(team.filter(employee => employee.getRole() === "Intern")
    .map(intern => createIntern(intern))
    .join("")
    );

    return pageContent.join("");
    

}


//exports function for html generation
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Site</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
     integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 team-header">
                <h1 class="text-center">Meet the Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-section col-12 d-flex justify-content-center">
            ${createTeam(team)}
            </div>
        </div>
    </div>
    
</body>
</html>
`;
};