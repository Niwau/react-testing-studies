# 🎪 Testes em aplicações React com Jest e React Testing Library

![](https://uploads.sitepoint.com/wp-content/uploads/2016/10/1475698586jest2-01.png)

## **Métodos getBy e getAllBy**

### getBy
- 🟢 É utilizado para pegar **elementos únicos** no documento.
- 🔴 Causa uma **falha** de teste se o elemento não for encontrado ou mais de um elemento for encontrado.

### getAllBy
- 🟢 É utilizado para pegar **vários elementos** no documento e retorna um array com os elementos encontrados.
- 🔴 Causa uma **falha** de teste se o elemento não for encontrado.

---

## **Métodos queryBy e queryAllBy**

### queryBy
- 🟢 É utilizado para pegar **elementos únicos** no documento.
- 🔴 Retorna **null** caso o elemento não for encontrado.

### queryAllBy
- 🟢 É utilizado para pegar **vários elementos** no documento e retorna um array com os elementos encontrados.
- 🔴 Retorna um **array vazio** caso os elementos não forem encontrados.

---

## **Métodos findBy e findAllBy**

### findBy
- 🟢 Retorna uma promisse que é **resolvida** quando o elemento é encontrado.
- 🔴 Retorna uma promisse que é **rejeitada** quando o elemento não é encontrado.

### findAllBy
- 🟢 Retorna uma promisse que é **resolvida** quando os elemento são encontrados.
- 🔴 Retorna uma promisse que é **rejeitada** quando os elementos não são encontrados.