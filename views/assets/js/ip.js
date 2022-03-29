function whitelist() {
$ips = array("1.1.1.1", "1.1.1.2");
if(!in_array($_SERVER['REMOTE_ADDR'], $ips))
{
  header("HTTP/1.1 401 Unauthorized");
  exit;
}
}
