using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }

        public Usuario Obter(string email, string senha)
        {
            //NA LINHA DE BAIXO O EFCOR IR GERAR UM SQL, E VAI DISPARAR ESSA INSTRUNÇÃO DE SQL NA BASE DE DADOS 
            //E VAI ME TRAZER A PRIMERIA OCORRENCIA QUE EXISTA, ONDE OS DADOS ESTEJA NO PAREMETRO OBTER
            return QuickBuyContexto.Usuario.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }

        public Usuario Obter(string email)
        {
            return QuickBuyContexto.Usuario.FirstOrDefault(u => u.Email == email);
        }
    }
}
