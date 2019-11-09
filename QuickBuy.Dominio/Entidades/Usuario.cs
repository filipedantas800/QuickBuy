using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int id { get; set; }

        public string Email { get; set; }

        public string Senha { get; set; }

        public string Nome { get; set; }

        public string SobreNome { get; set; }

        //Um usuario pode ter nenhum ou muitos pedidos

        public ICollection<Pedido> Pedidos { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Email))
                AdicionarCriticar("Email não foi informado");

            if (string.IsNullOrEmpty(Senha))
                AdicionarCriticar("Senha não foi informado");
        }
    }
}
