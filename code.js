function displayPlan() {
    const step1 = "Collect pants"
    const step2 = "???"
    const step3 = "Profit!"
    const collect = document.querySelector("#step-1")
    const question = document.querySelector("#step-2")
    const profit = document.querySelector("#step-3")
    const button = document.querySelector("button")

    button.addEventListener("click", event => {
        collect.append(step1)
        question.append(step2)
        profit.append(step3)
    })
