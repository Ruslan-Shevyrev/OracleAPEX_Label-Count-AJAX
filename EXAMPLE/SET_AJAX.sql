BEGIN
    HTP.p ('<script type="text/javascript">');
    HTP.p (   'addNavigationBadgeLoader();');
    HTP.p (   'addNavigationBadge(''COUNT_TEST'');');
    --register your AJAX Process here
    HTP.p ('</script>');
END;