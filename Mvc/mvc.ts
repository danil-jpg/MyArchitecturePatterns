//MVC расшифровывается как «модель-представление-контроллер» (от англ. model-view-controller).
//  Это способ организации кода, который предполагает выделение блоков, отвечающих за решение разных задач.
//  Один блок отвечает за данные приложения, другой отвечает за внешний вид, а третий контролирует работу приложения.
//
//
// Реализовать пример с кафе
//
//

class ModelKitchen {
  public order: number;
  private clientName: string;
  protected clientId: number;
  protected instructions: string;

  constructor(order: number, clientName: string, clientId: number, instructions: string) {
    (this.order = order), (this.clientName = clientName), (this.clientId = clientId), (this.instructions = instructions);
  }

  makeDish(order: number): void {
    console.log(`Your ${order} dish is ready!`);
    const view = new ViewDish().menuItems(order);
  }

  storeInfo(): object {
    let obj: object = {
      order: this.order,
      clientName: this.clientName,
      clientId: this.clientId,
    };

    return obj;
  }
}

class ViewDish {
  public menu: string;

  menuItems(out: number): void {
    switch (out) {
      case 0:
        console.log(`1 - sandwich ,2 - burger,3 - fish`);
        break;
      case 1:
        console.log(`1 - sandwich is out,2 - burger,3 - fish`);
        break;
      case 2:
        console.log(`1 - sandwich,2 - burger is out,3 - fish`);
        break;
      case 3:
        console.log(`1 - sandwich,2 - burger ,3 - fish is out`);
        break;
    }
  }
}

class ControllerWaiter {
  public order: number;

  constructor(order: number) {
    this.order = order;
  }

  logic(): void {
    const kitchen = new ModelKitchen(this.order, "Dan", 1, "nothing special");

    kitchen.makeDish(this.order);

    kitchen.storeInfo();
  }
}

const person = new ControllerWaiter(1).logic();
