using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public  abstract class Entidade
    {
        public List<string> _mensagensValidacao { get; set; }

        private List<string> Mensagemvalidacao
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); }
        }

        protected void LimparMensagensValidacao()
        {
            Mensagemvalidacao.Clear();
        }

        protected void AdicionarCriticar(string mensagem)
        {
            Mensagemvalidacao.Add(mensagem);
        }

        public abstract void Validate();
        protected bool EhValido
        {
            get { return !Mensagemvalidacao.Any(); }
        }
    }
}
