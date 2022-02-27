/* Your Code Here */

    function createEmployeeRecord(array){
        let employeeRecord = {
          firstName: array[0],
          familyName: array[1], 
          title: array[2], 
          payPerHour: array[3], 
          timeInEvents: [],
          timeOutEvents: [], 
        }
        return employeeRecord;
      }

    function createEmployeeRecords(arrOfArrays){
        return arrOfArrays.map( (array) => createEmployeeRecord(array))
    }

    function createTimeInEvent(event){
        let [date, hour] = event.split(" ")
        let eventObj = {
            type: "TimeIn", 
            date: date,
            hour: parseInt(hour, 10),
        }
        this.timeInEvents.push(eventObj)
        return this
    }


    function createTimeOutEvent(event){
        let [date, hour] = event.split(" ")
        let eventObj = {
            type: "TimeOut",
            date: date,
            hour: parseInt(hour, 10),
        }
        this.timeOutEvents.push(eventObj)
        return this
    }

    function hoursWorkedOnDate(date){
        const timeIn = this.timeInEvents.find(event => event.date === date)
        const timeOut = this.timeOutEvents.find(event => event.date === date)
        return (timeOut.hour - timeIn.hour)/100
    }

    function wagesEarnedOnDate(date) {
        const hours = hoursWorkedOnDate.call(this, date)
        return this.payPerHour * hours
    }
 
function calculatePayroll(employeeRecords){
   const record =  employeeRecords.map(employee => allWagesFor.call(employee))
   return record.reduce((currentValue, total) => currentValue + total)
}

function findEmployeeByFirstName(employees, fistNameString) {
    return employees.find(emp => emp.firstName === fistNameString)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

