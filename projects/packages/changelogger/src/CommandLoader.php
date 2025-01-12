<?php
/**
 * Command loader for the changelogger tool CLI.
 *
 * @package automattic/jetpack-changelogger
 */

namespace Automattic\Jetpack\Changelogger;

use Symfony\Component\Console\CommandLoader\CommandLoaderInterface;
use Symfony\Component\Console\Exception\CommandNotFoundException;

/**
 * Command loader for the changelogger tool CLI.
 */
class CommandLoader implements CommandLoaderInterface {

	/**
	 * Get the class name for a command.
	 *
	 * @param string $name Command name.
	 * @return string Class name.
	 */
	private function get_class_name( $name ) {
		return __NAMESPACE__ . '\\' . ucfirst( $name ) . 'Command';
	}

	/**
	 * Checks if a command exists.
	 *
	 * @param string $name Command name.
	 * @return bool
	 */
	public function has( $name ) {
		return class_exists( $this->get_class_name( $name ) );
	}

	/**
	 * Loads a command.
	 *
	 * @param string $name Command name.
	 * @return Command
	 * @throws CommandNotFoundException If the command is not found.
	 */
	public function get( $name ) {
		$class = $this->get_class_name( $name );
		if ( ! class_exists( $class ) ) {
			throw new CommandNotFoundException( "Command \"$name\" does not exist." );
		}
		return new $class();
	}

	/**
	 * Return all command names.
	 *
	 * @return string[] All registered command names
	 */
	public function getNames() {
		$names = array();
		foreach ( new \DirectoryIterator( __DIR__ ) as $file ) {
			if ( substr( $file->getBasename(), -11 ) === 'Command.php' ) {
				$names[] = lcfirst( substr( $file->getBasename(), 0, -11 ) );
			}
		}
		sort( $names );
		return $names;
	}
}
