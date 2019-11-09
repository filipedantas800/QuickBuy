namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }

        public int ProdutoId { get; set; }

        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (ProdutoId == 0)
                AdicionarCriticar("Não foi identificado qual a referência do produto");

            if (Quantidade == 0)
                AdicionarCriticar("Quantidade não foi informado");
        }
    }
}
