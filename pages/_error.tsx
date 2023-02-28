import type {NextPage} from 'next';
import NextErrorComponent from 'next/error';

type ErrorPageProps = {
  err: unknown;
  statusCode: number;
  hasGetInitialPropsRun: boolean;
};

const ErrorPage: NextPage<ErrorPageProps> = ({statusCode, hasGetInitialPropsRun, err}) => {
  if (!hasGetInitialPropsRun && err) {
    // TODO: only during development
    // eslint-disable-next-line no-console
    console.log(err);
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

ErrorPage.getInitialProps = async (context): Promise<ErrorPageProps> => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(context);

  const {res, err} = context;

  const nextErrorInitialProps: ErrorPageProps = {
    err,
    hasGetInitialPropsRun: false,
    statusCode: errorInitialProps.statusCode,
  };

  nextErrorInitialProps.hasGetInitialPropsRun = true;

  if (res?.statusCode === 404) {
    return nextErrorInitialProps;
  }

  if (err) {
    // TODO: this error case should be shown during the development. It is for Dev only
    // eslint-disable-next-line no-console
    console.log(err);
    return nextErrorInitialProps;
  }

  return nextErrorInitialProps;
};

export default ErrorPage;
