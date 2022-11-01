DECLARE
    COUNT_TEST  NUMBER;
BEGIN

SELECT 1
    INTO COUNT_TEST
    FROM DUAL;

/*Write your query here*/
--DBMS_LOCK.SLEEP(5); --for Test only

    htp.p('[{'||
           '"COUNT_TEST": '||COUNT_TEST||
           '}]');
END;