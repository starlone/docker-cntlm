function FindProxyForURL(url, host) {
  if (
    dnsDomainIs(host, "localhost.bb.com.br") ||
    dnsDomainIs(host, "localhost.desenv.bb.com.br") ||
    /* dnsDomainIs(host, "plataforma.hm.bb.com.br") || */
    dnsDomainIs(host, "localhost.estatico.bb.com.br") || 
    dnsDomainIs(host, "plataforma.int")
  ) return "DIRECT";

  if (
    dnsDomainIs(host, ".bb.com.br") ||
    dnsDomainIs(host, ".bancobrasil.com.br") ||
    dnsDomainIs(host, ".bancodobrasil.com.br") ||
    dnsDomainIs(host, ".labbs.com.br")
  ) return "PROXY localhost:3128";
  return "DIRECT";
}
