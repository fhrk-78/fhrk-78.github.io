class fhrk_pizzaextension {
    getInfo() {
      return {
        id: 'fhrk_pizzaextension',
        name: 'PizzaN',
        blocks: [
          {
            opcode: 'kosoado_status',
            blockType: Scratch.BlockType.REPORTER,
            text: 'こそあど'
          },
          {
            opcode: 'ph_status',
            blockType: Scratch.BlockType.REPORTER,
            text: 'ぴざはるまき'
          }
        ]
      };
    }
  
    kosoado_status() {
      return '生存';
    }
    ph_status() {
      return 'ギリ生存';
    }
  }
  
  Scratch.extensions.register(new fhrk_pizzaextension());
