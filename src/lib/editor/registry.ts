import { IComponent } from "./component";

export class Registry {
    private static components: Record<string, IComponent> = {};

    static registerComponent(id: string, component: IComponent) {
        // if (this.components[id]) {
        //     throw new Error(`Component with id ${id} is already registered.`);
        // }
        this.components[id] = component;
    }
    
    static getComponent(id: string): IComponent | null {
        return this.components[id] || null;
    }

    static getAllComponents(): IComponent[] {
        return Object.values(this.components);
    }
}