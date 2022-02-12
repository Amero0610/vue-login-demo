#!/bin/bash
 
read -r -p "push? [Y/n] " input
 
case $input in
	    [yY][eE][sS]|[yY])
		            echo "push continue"
			            git add -A
				            git commit -m $1
					            git push origin master
						                        exit 1
									        ;;

										    [nN][oO]|[nN])
											            echo "push stop"
												            exit 1
													                ;;

									    *)
																        echo "Input is wrong "																    ;;
															    esac
