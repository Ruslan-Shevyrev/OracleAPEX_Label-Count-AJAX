## Install

1. Add\
**OracleApex-Label-Count-AJAX.js**\
**OracleApex-Label-Count-AJAX.css**\
to your project.

2. add Application Process

<p align="center">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/1.%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Application process">
</p>

***On Load: After Footer (page template footer)***

Code

```
DECLARE
    COUNT_TEST  NUMBER;
BEGIN

SELECT 1
    INTO COUNT_TEST
    FROM DUAL;

/*Write your query here*/
DBMS_LOCK.SLEEP(5); --for Test only

    htp.p('[{'||
           '"COUNT_TEST": '||COUNT_TEST||
           '}]');
END;
```

<p align="center">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/2.%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Application code">
</p>