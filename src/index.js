(async function () {
  const data = await fetch("./src/data.json");
  const res = await data.json();

  let employees = res;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__names--info");

  employeeList.addEventListener("click", (e) => {
    let id = e.target.id;
    if (e.target.tagName === "SPAN" && e.target.id !== selectedEmployeeId) {
      console.log(selectedEmployeeId);

      selectedEmployeeId = id - 1 + 1;

      renderSingleEmployee();
      renderEmployees();
    }
  });

  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employees.forEach((element) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");

      if (selectedEmployeeId === element.id) {
        employee.classList.add("selected");
        selectedEmployee = element;
      }

      employee.setAttribute("id", element.id);
      employee.innerHTML = `${element.firstName} ${element.lastName} <button>x</button>`;

      employeeList.append(employee);
    });
  };

  const renderSingleEmployee = () => {
    employeeInfo.innerHTML = `<img src="${selectedEmployee.imageUrl}"></img>
            <h2>${selectedEmployee.firstName} ${selectedEmployee.lastName}</h2>
            <div>Emailo: ${selectedEmployee.email}</div>
            <div>Age: ${selectedEmployee.age}</div>
            <div>Dob: ${selectedEmployee.dob}</div>
            <div>Address: ${selectedEmployee.address}</div>
            `;
  };
  renderEmployees();
})();
