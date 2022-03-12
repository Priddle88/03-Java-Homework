# 03-Java-Homework

I was given lines 1-16 and was told to give the user a criteria to choose from to generate a randomized password.

I saw that there should be a function called generatePassword that needed to be run to generate the password. I worked in steps. I started with the prompts and slowly added variables above the function over time. I decided to declare most of them globally so that they were easier to access and work with over time. I placed the prompts inside of the generatePassword function. I wrote those before most of the conditonals to make sure they worked. I followed that with the conditionals to properly generate the user's preferences for the password.

The hardest part for me was trying to figure out how to make the password 128 letters. With two alphabets put together (lowercase and uppercase), I would still need an extra 66 characters. I had to generate a randdom number that equaled a random integer.

At the end, I was getting a result that had commas added inbetween. I googled around for a while and realized I had to add an extra variable.

I returned finalPassword so that the function of generatePassword would equal the value of finalPassword. As I mentioned in the beginning, generatePassword equals password. The variable password is connected to the variable passwordText which is connected with the password if in the linked css file.