export interface IProduto {      //leva essa interface para a classe dos produtos
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  quantidadeEstoque:number;
  imagem: string;
}

export interface IProdutoCarrinho extends IProduto{  //vai ter tudo acima e vamos acrescentar abaixo algumas coisas//

    quantidade: number;    // quantidade selecioanda na hora da compra//


}

export const produtos: IProduto[] = [
  { id: 1, descricao: "Mouse", preco: 20.00, descricaoPreco: "À vista no PIX", imagem:"/assets/fone-de-ouvido-1.jpg", quantidadeEstoque:50},
  { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"assets/fone-de-ouvido-2.jpg", quantidadeEstoque:30 },
  { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"/assets/fone-de-ouvido-3.jpg", quantidadeEstoque:50 },
  { id: 4, descricao: "Fone para quem joga FPS", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"/assets/hd.jpg", quantidadeEstoque:40},
  { id: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista no PIX", imagem:"/assets/laptop-1.jpg", quantidadeEstoque:80},
  { id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista no PIX", imagem:"/assets/laptop-2.jpg", quantidadeEstoque:70},
  { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem:"/assets/monitor-1.jpg" , quantidadeEstoque:20},
  { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-1.jpg", quantidadeEstoque:15},
  { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem:"/assets/mouse-2.jpg", quantidadeEstoque:25 },
  { id: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no PIX", imagem:"//assets/mouse-2.jpg", quantidadeEstoque:10},
  { id: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no PIX", imagem:"/assets/mouse-3.jpg", quantidadeEstoque:35 },
  { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem:"/assets/mouse-4.jpg", quantidadeEstoque:10 },
  { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista no PIX", imagem:"/assets/placa-video.jpg", quantidadeEstoque:10 },
  { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem:"/assets/processador.jpg", quantidadeEstoque:10 },
  { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem:"/assets/teclado-1.jpg", quantidadeEstoque:10},
  { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem:"/assets/teclado-1.jpg", quantidadeEstoque:10},
]
