import { JsonObject } from '@prisma/client/runtime/library';

export interface procedureProps {
  completedRequirements: JsonObject;
  node: JsonObject;
  arrow: JsonObject;
}

export class procedure {
  private props: procedureProps;

  constructor(props: procedureProps) {
    this.props = props;
  }

  public get completedRequirements(): JsonObject {
    return this.props.completedRequirements as JsonObject;
  }
  public set completedRequirements(completedRequirements: JsonObject) {
    this.props.completedRequirements = completedRequirements;
  }
  public get node(): JsonObject {
    return this.props.node as JsonObject;
  }
  public set node(node: JsonObject) {
    this.props.node = node;
  }
  public get arrow(): JsonObject {
    return this.props.arrow as JsonObject;
  }
  public set arrow(arrow: JsonObject) {
    this.props.arrow = arrow;
  }
}
