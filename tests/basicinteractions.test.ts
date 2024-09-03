import { expect, test } from "@playwright/test";
//test("Interaction with inputs", async ({ page }) => {

   // await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    //const messageInput = page.locator("//input[@id='user-message']");   //finding the element with locator 
   // await messageInput.scrollIntoViewIfNeeded();    // If you wants to use the scrollbar use this one 
   // console.log(await messageInput.getAttribute("placeholder"));    //Console.log is the first we assertion in playwright just for learning purpose
    //expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")  //finding the element with attribute  
    //console.log(await messageInput.inputValue());
    //console.log('Before entering data: '+ await messageInput.inputValue());
    //await messageInput.type("Hi Sneha");
    //console.log('After entering data: '+ await messageInput.inputValue());
    

//})

test("Sum", async ({ page }) => {
     await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
     const sum1input = page.locator("#sum1")
     const sum2input = page.locator("#sum2")
     const getValueBtn = page.locator("//button[text()='Get sum']")
     let num1 = 121;
     let num2 = 546;
     await sum1input.type("" + num1);
     await sum2input.type("" + num2);
     await getValueBtn.click()
     const result = page.locator("#addmessage")
     console.log(await result.textContent());
     let expectedResult = num1 + num2;
     expect(result).toHaveText("" + expectedResult)


})