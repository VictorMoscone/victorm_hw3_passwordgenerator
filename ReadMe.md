# 03 Victor Moscone's Password Generator - HW3

## ~Black Hole~ Password Generator

**A quick description**: Hola! Welcome to another app from your boy. This time, we're applying javascript for some sweet password generating functionality.

You want lowercase letters? We got 'em. Uppercase? You know it. Numbers and special characters? We're a little low on stock - but you can bet we have enough for you. Maybe you want only two of those four criteria? Well lucky for you, that's your choice! Think of each option as one of your four limbs, but unlike your limbs, they can be added or removed at will! We're practically Deadpool.

There are *SO* man ways I could improve this code. 
1. Instead of prompts, the user has checkboxes they can toggle.
2. The user can choose how many passwords they want to generate at once.
3. The characterList array starts empty, and new arrays are added to it, instead of removed. This actually would have helped a lot.
4. Using Arrays had a lot of benefits, but also had some complications when generating multiple times each page load. I had to use .slice() to duplicate the original array. No big deal on this project, but for a larger scale website - duplicating arrays would slow down the page. Once again, if I had started the array empty and added to it, this would have been a much easier problem to solve.

## Setup Instruction

```
1. Clone the repro to your desktop.
2. Launch index.html.

Alternatively:
1. Visit https://victormoscone.github.io/victorm_hw3_passwordgenerator/
```

**Usage**

* Primary Usage: To generate customized passwords with various character criterias.
* Seen below -

![password_mobile_1](https://user-images.githubusercontent.com/70674522/96357676-deea0080-10b3-11eb-9405-3d206d2b6c24.PNG)
![password_web_1](https://user-images.githubusercontent.com/70674522/96357677-df829700-10b3-11eb-8129-a2da2d8f55f5.PNG)
![password_web_2](https://user-images.githubusercontent.com/70674522/96357695-10fb6280-10b4-11eb-8f23-bdf50fdddf30.PNG)

**Credits** 

* w3schools.com
* stackoverflow.com

- - -
© 2020 Victor Moscone. All Rights Reserved.