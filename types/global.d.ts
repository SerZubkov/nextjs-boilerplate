
declare interface FCPage<P = {}> extends React.FC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
}
