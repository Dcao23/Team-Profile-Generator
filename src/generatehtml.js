const generateHTML = (teamArray) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/style.css">
        <title>Document</title>
    </head>
    <body>
        <header>My Team Members</header>
        <div class= "mainCard">
    ${teamArray.map((teamMember) => {
      if (teamMember.getRole() === "Manager") {
        return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h1>${teamMember.name}</h1>
                <h2>☕ Manager</h2>
                <h3>ID: ${teamMember.id}</h3>
                <h3>Email: <a href="#" class="Email">${teamMember.email}</a></h3>
                <h3>Office number: ${teamMember.officeNumber}</h3>
            </div>
          </div>
            `;
      } else if (teamMember.getRole() === "Engineer") {
        return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h1>${teamMember.name}</h1>
                <h2>👓 Engineer</h2>
                <h3>ID: ${teamMember.id}</h3>
                <h3>Email: <a href="#" class="Email">${teamMember.email}</a></h3>
                <h3>Github:<a href="#" class="Github">${teamMember.github}</a></h3>
            </div>
          </div>
        `;
      } else if (teamMember.getRole() === "Intern") {
        return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h1>${teamMember.name}</h1>
                <h2>👨‍🎓 Intern</h2>
                <h3>ID: ${teamMember.id}</h3>
                <h3>Email: <a href="#" class="Email">${teamMember.email}</a></h3>
                <h3>School:</h3>
            </div>
          </div>
            `;
      }
    })}
    </div>
    </body>
    </html>`;
};

module.exports = generateHTML;
