export class NugetDependency {
  name: string;
  version: string;
  framework: string;

  constructor(value: string) {
    const values = value.split(':');
    if (values && values.length > 1) {
      this.name = values[0];
      this.version = values[1];
      this.framework = values[2];
    }
  }
}
