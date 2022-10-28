# OracleApex-Label-Count-AJAX

Adds a label with a number next to a ***Navigation Menu*** item or ***Region Display Selector*** using **AJAX**.

***1. Navigation Menu:***
<p align="left">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/1.%20Examle%20Count-Label-Oracle-APEX-AJAX.png" width="150" title="Example Navigation Menu">
</p>

***2. Region Display Selector:***
<p align="left">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/2.%20Examle%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Example Region Display Selector">
</p>

## Install

1. Add\
**OracleApex-Label-Count-AJAX.js**\
**OracleApex-Label-Count-AJAX.css**\
to your project.

2. Create Application Process

***For Example: SET_AJAX***

<p align="center">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/1.%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Application process">
</p>

:exclamation: **Point:** ***On Load: After Footer (page template footer)***

Code

```
BEGIN
    HTP.p ('<script type="text/javascript">');
    HTP.p (   'addNavigationBadgeLoader();');
    --register your AJAX Process here
    HTP.p ('</script>');
END;
```

<p align="center">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/2.%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Application code">
</p>


## Use
1. Create Application Process (AJAX)

***For Example: COUNT_TEST***

<p align="center">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/3.%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Application process">
</p>

:exclamation: **Point:** ***Ajax Callback: Run this application process when requested by a page process***

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
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/4.%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Application code">
</p>

2. Registry Application Process in **SET_AJAX**

```
BEGIN
    HTP.p ('<script type="text/javascript">');
    HTP.p (   'addNavigationBadgeLoader();');
    HTP.p (   'addNavigationBadge(''COUNT_TEST'');');
    --register your AJAX Process here
    HTP.p ('</script>');
END;
```

<p align="center">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/5.%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Application code">
</p>

3. Add to **Navigation Menu**

Add to ***Image/Class*** your class and js-three-quarters-loader

```
COUNT_TEST js-three-quarters-loader
```

<p align="center">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/6.%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Application code">
</p>

4. Add to **Region Display Selector**

Title of your Region must look like 

```
<div class="COUNT_RECALL js-three-quarters-loader">Test Label</div>
```

<p align="center">
  <img src="https://github.com/Ruslan-Shevyrev/MediaFilesToGitHub/blob/master/OracleApex-Label-Count-AJAX/6.%20Count-Label-Oracle-APEX-AJAX.png" width="350" title="Application code">
</p>

<table>
  <tr>
    <td valign="center" width="49%"><img src="https://github.com/Ruslan-Shevyrev/Ruslan-Shevyrev/blob/main/logoRS/logo_mini.gif" title="logo"></td>
    <td valign="center" width="49%"><img src="https://github.com/Ruslan-Shevyrev/Ruslan-Shevyrev/blob/main/logoRS/logoRS_FULL.png" title="RuslanShevyrev"></td>
  </tr>
</table>