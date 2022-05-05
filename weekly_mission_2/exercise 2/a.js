const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
explorers.forEach(explorer => console.log(explorer.name))
explorers.forEach(explorer => console.log(explorer.stack))
const list = explorers.map((explo) => console.log(explo.stack)) 
const filtro = explorers.filter((filtro) => filtro.stack.includes("js"))
console.log(filtro)
const encontrar = explorers.find((finde) => finde.city.includes("CDMX"))
console.log(encontrar)
const suma = explorers.reduce((acc, sumas) => acc + sumas.exercises_completed, 0)
console.log(suma)
const trues = explorers.some((a) => a.missions.frontend.exercisesFinished === true)
console.log(trues)
const todos = explorers.every((c) => c.missions.onboarding.isFinished === true)
console.log(todos)